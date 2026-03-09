import { createBrowserRouter, redirect } from "react-router";
import Layout from "./layout/Layout";
import Homepage from "./Homepage";
import Scores from "./scores/Scores";
import { fetchScores } from "./scores/service";
import ErrorComponent from "./ErrorComponent";
import Blog from "./blog/Blog";
import {
  authenticateWP,
  getPostReplies,
  getPosts,
  getSinglePost,
  postNewReply,
} from "./blog/services";
import PostPage from "./blog/PostPage";
import type { WPComToken } from "./blog/interfaces";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/scores",
        Component: Scores,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const outcome =
            (url.searchParams.get("outcome") as "WIN" | "LOSS") ?? undefined;
          const page = url.searchParams.get("page") || "1";
          const juniors = url.searchParams.get("juniors");
          return await fetchScores({
            outcome,
            juniors: juniors === "1" ? true : false,
            items: 10,
            page: parseInt(page),
          });
        },
        ErrorBoundary: ErrorComponent,
      },
      {
        path: "/blog",
        Component: Blog,
        loader: async () => await getPosts(),
        ErrorBoundary: ErrorComponent,
      },
      {
        path: "/blog/:id",
        Component: PostPage,
        loader: async ({ params }) => {
          const postId = parseInt(params.id!);
          const [post, replies] = await Promise.all([
            getSinglePost(postId),
            getPostReplies(postId),
          ]);
          return {
            post,
            replies,
          };
        },
        ErrorBoundary: ErrorComponent,
        action: async ({ request, params }) => {
          const postId = parseInt(params.id!);
          const formData = await request.formData();
          await postNewReply(postId, {
            author_name: formData.get("authorName")?.toString(),
            author_email: formData.get("authorEmail")?.toString(),
            content: formData.get("content")?.toString(),
          });
        },
      },
      {
        path: "/wp-oauth-callback",
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const oauthCode = url.searchParams.get("code");
          const postId = url.searchParams.get("post_id");
          if (oauthCode) {
            try {
              const { access_token } = (await authenticateWP(
                oauthCode!,
              )) as WPComToken;
              sessionStorage.setItem("token", access_token!);
            } catch (error) {
              console.error(error);
            }
          }
          return redirect(`/blog/${postId}`);
        },
        element: null,
      },
    ],
  },
]);
