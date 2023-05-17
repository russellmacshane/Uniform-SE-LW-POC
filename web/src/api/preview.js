export default function API(req, res) {
  const slug = req.query ? req.query["slug"] : "/";
  const host = process.env.GATSBY_HOST;
  let redirectPath;

  if (slug === '/') {
    redirectPath = '/';
  } else {
    redirectPath = `/${slug}/`;
  }

  const redirectUrl = `${host}${redirectPath}?is_incontext_editing_mode=true`;
  res.redirect(redirectUrl);
}