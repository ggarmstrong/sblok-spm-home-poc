import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "w0I0SVaUMwQCsjHzUxeUfwtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export default Storyblok;
