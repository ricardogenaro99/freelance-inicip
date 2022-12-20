import axios from "axios";
import parse from "html-react-parser";

export const parseHtml = (content) => {
  try {
    return parse(content);
  } catch (error) {
    return content;
  }
};

export const windowScroll = (top = 0, behavior = "smooth") => {
  window.scrollTo({
    top,
    behavior,
  });
};

export const getMainMedia = async (idMedia) => {
  const res = await axios(`${process.env.REACT_APP_URL_WP}/media/${idMedia}`);
  return res.data.source_url;
};

const gatTags = async (tags = []) => {
  const res = await axios(`${process.env.REACT_APP_URL_WP}/tags`);
  return res.data.filter((e) => tags.includes(e.id)).map((e) => e.name);
};

const restructureData = async (e) => {
  const image = e.featured_media && (await getMainMedia(e.featured_media));
  const urlPfd = e.acf.urlPdf && (await getMainMedia(e.acf.urlPdf));
  const tags = await gatTags(e.tags);
  return {
    id: e.id,
    authors: e.acf.author,
    type: e.acf.typePost,
    content: e.content.rendered,
    title: e.title.rendered,
    image: image,
    createdAt: e.date,
    updateAt: e.modified,
    featured_media: e.featured_media,
    excerpt: e.excerpt.rendered,
    urlPdf: urlPfd,
    tags: tags,
  };
};

export const getPosts = async (type = "") => {
  try {
    const response = await axios(`${process.env.REACT_APP_URL_WP}/posts`);
    const data = await Promise.all(
      response.data
        .filter((e) => type === "" || e.acf.typePost === type)
        .map(async (e) => await restructureData(e))
    );
    return data;
  } catch (error) {
    return [];
  }
};

export const getPostById = async (postID, type = "") => {
  try {
    const response = await axios(
      `${process.env.REACT_APP_URL_WP}/posts/${String(postID)}`
    );
    const restructure = await restructureData(response.data);
    return restructure.type === type ? restructure : undefined;
  } catch (error) {
    return;
  }
};
