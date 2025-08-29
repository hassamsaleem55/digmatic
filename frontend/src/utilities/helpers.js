export function loadCssFiles(files) {
  document.querySelectorAll("link[data-dynamic]").forEach((el) => el.remove());

  return Promise.all(
    files.map((file) => {
      if (!file) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = file.rel;
        link.href = file.link;
        link.dataset.dynamic = "true";
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });
    })
  );
}
export function loadJsFiles(files) {
  return new Promise((resolve, reject) => {
    const loadNext = (index) => {
      if (index >= files.length) {
        resolve();
        return;
      }

      const src = files[index];
      if (!src) {
        loadNext(index + 1);
        return;
      }

      // Prevent duplicate
      if (document.querySelector(`script[src="${src}"]`)) {
        loadNext(index + 1);
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.dataset.dynamic = "true";
      script.async = false; // 🔑 ensure sequential execution
      script.onload = () => loadNext(index + 1);
      script.onerror = (err) => reject(new Error(`Failed to load ${src} due to err: ${err}`));
      document.body.appendChild(script);
    };

    loadNext(0);
  });
}
