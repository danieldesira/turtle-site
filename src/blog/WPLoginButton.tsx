import { FaWordpress } from "react-icons/fa6";

function WPLoginButton() {
  const redirectUrl = encodeURIComponent(
    `${location.origin}/wp-oauth-callback`,
  );

  const oauthUrl = `https://public-api.wordpress.com/oauth2/authorize?client_id=${import.meta.env.VITE_APP_WP_COM_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=code`;

  return (
    <a
      className="flex gap-1 p-2 bg-primary text-white items-center w-fit rounded-sm"
      href={oauthUrl}
      title="Login with WordPress.com"
    >
      <FaWordpress /> Login to comment
    </a>
  );
}

export default WPLoginButton;
