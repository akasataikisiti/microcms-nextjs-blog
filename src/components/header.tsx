import Link from "next/link";
import { FC } from "react";

export type HeaderProps = {
  categories: string[];
  logoSrc: string;
};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="header-top-div">
      <header className="header">
        <Link href="/" className="left-link" aria-label="logo">
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          MyBlog
        </Link>

        <nav className="hidden gap-12 lg:flex">
          <a href="#" className="category-link-text">
            {props.categories[0]}
          </a>
          <a href="#" className="category-link-text2">
            {props.categories[1]}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="category-link-text">
            {props.categories[2]}
          </a>
          <a href="#" className="category-link-text">
            {props.categories[3]}
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
