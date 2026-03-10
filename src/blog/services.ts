import axios from "axios";
import {
  axiosWordpressApiInstance,
  axiosWordpressOauthBEInstance,
} from "../axiosInstance";
import type { PostCommentPayload } from "./interfaces";
import { store } from "../store";

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

export const authenticateWP = async (oauthCode: string) => {
  const res = await axiosWordpressOauthBEInstance.post("/token", {
    code: oauthCode,
  });
  return res.data;
};

export const getCurrentWpcomUser = async () => {
  const res = await axios.get("https://public-api.wordpress.com/rest/v1.1/me", {
    headers: { Authorization: `Bearer ${store.getState().wpcomToken.value}` },
  });
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

export const updateReply = async (
  commentId: number,
  payload: PostCommentPayload,
) => {
  const res = await axiosWordpressApiInstance.post(
    `/comments/${commentId}`,
    payload,
  );
  return res.data;
};

export const deleteComment = async (commentId: number) => {
  const res = await axiosWordpressApiInstance.delete(
    `/comments/${commentId}?force=true`,
  );
  return res.data;
};
