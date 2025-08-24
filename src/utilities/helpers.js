export function loadCssFiles(files) {
  document.querySelectorAll("link[data-dynamic]").forEach((el) => el.remove());

  files.map((file) => {
    const link = document.createElement("link");
    link.rel = file.rel;
    link.href = file.link;
    link.dataset.dynamic = "true";
    document.head.appendChild(link);
  });
}

export function loadJsFiles(files) {
  document
    .querySelectorAll("script[data-dynamic]")
    .forEach((el) => el.remove());

  const loadNext = (index) => {
    if (index >= files.length) {
      return;
    }

    const src = files[index];
    if (!src) {
      loadNext(index + 1);
      return;
    }

    if (document.querySelector(`script[src="${src}"]`)) {
      loadNext(index + 1);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.dynamic = "true";
    script.onload = () => loadNext(index + 1);
    document.head.appendChild(script);
  };
  loadNext(0);
}
