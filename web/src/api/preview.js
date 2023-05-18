export default function API(req, res) {
  const path = req.query ? req.query["path"] : "/";
  let redirectPath;

  if (path === '/') {
    redirectPath = '/';
  } else {
    redirectPath = `/${path}/`;
  }
  const redirectUrl = `${redirectPath}?is_incontext_editing_mode=true`;
  res.redirect(redirectUrl);
}