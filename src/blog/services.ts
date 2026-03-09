import {
  axiosWordpressApiInstance,
  axiosWordpressOauthBEInstance,
} from "../axiosInstance";
import type { PostCommentPayload } from "./interfaces";

export const getPosts = async () => {
  const res = await axiosWordpressApiInstance.get("/posts");
  return res.data;
};

export const getSinglePost = async (id: number) => {
  const res = await axiosWordpressApiInstance.get(`/posts/${id}`);
  return res.data;
};

export const getPostReplies = async (postId: number) => {
  const res = await axiosWordpressApiInstance.get(`/posts/${postId}/replies`);
  return res.data;
};

export const postNewReply = async (
  postId: number,
  payload: PostCommentPayload,
) => {
  const res = await axiosWordpressApiInstance.post(
    `/posts/${postId}/replies/new`,
    payload,
  );
  return res.data;
};

export const authenticateWP = async (oauthCode: string) => {
  const res = await axiosWordpressOauthBEInstance.post("/token", {
    code: oauthCode,
  });
  return res.data;
};
