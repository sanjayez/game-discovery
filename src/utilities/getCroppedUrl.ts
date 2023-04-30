const getCroppedUrl = (url: string): string => {
  const cropIdx = url.indexOf("io/media") + "io/media/".length;
  return url.slice(0, cropIdx) + "crop/600/400/" + url.slice(cropIdx);
};

export default getCroppedUrl;
