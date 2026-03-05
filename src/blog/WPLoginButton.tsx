import { FaWordpress } from "react-icons/fa6";

function WPLoginButton() {
  const redirectUrl = `https://${location.host}`;

  return (
    <a
      className="flex gap-1 p-2 bg-primary text-white items-center w-fit rounded-sm"
      href={`https://public-api.wordpress.com/oauth2/authorize?client_id=${import.meta.env.VITE_APP_WP_COM_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=code`}
      title="Login with WordPress.com"
    >
      <FaWordpress /> Login to comment
    </a>
  );
}

export default WPLoginButton;
