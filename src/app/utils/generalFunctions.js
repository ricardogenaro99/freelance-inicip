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
