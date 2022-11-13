import parse from "html-react-parser";

export const parseHtml = (content) => {
  try {
    return parse(content);
  } catch (error) {
    return content;
  }
};
