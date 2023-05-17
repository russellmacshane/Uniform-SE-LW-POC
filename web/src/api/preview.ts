export default function API(req, res) {
  const slug = req.query ? req.query["slug"] : "/";
  const host = process.env.GATSBY_HOST;
  const redirectUrl = `${host}/${slug}/?is_incontext_editing_mode=true`;
  res.redirect(redirectUrl);
}