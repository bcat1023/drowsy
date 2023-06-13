const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/indexframe.css",
        "/bio.html",
        "/bioframe.css",
        "/home.html",
        "/indexframe.css",
        "/projects.html",
        "/projectsframe.css",
        "/contactframe.css",
        "/contactframe.css",
      ])
    );
  });
  