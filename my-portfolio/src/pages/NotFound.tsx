import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center px-5 pb-32 pt-24 text-center">
        <p className="text-6xl font-semibold text-paper">404</p>
        <p className="eyebrow mt-4">Page not found</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link to="/" className="theme-btn mt-8">
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}