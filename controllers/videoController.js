import routes from "../routes";

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  /*const {
    body: { title, description, file },
  } = req;
  console.log(title);*/
  res.redirect(routes.videoDetail(12));
};

export const videoDetail = (req, res) => {
  const {
    params: { id: videoID },
  } = req;
  console.log(videoID);
  res.render("videoDetail", { pageTitle: "Videos Detail", videoID });
};

export const editVideo = (req, res) => {
  res.send("Edit Video");
};

export const deleteVideo = (req, res) => {
  res.send("Delet Video");
};
