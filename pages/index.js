import fetch from "isomorphic-unfetch";
import Link from 'next/link';
import withLayout from "../components/layout";

const Index = props => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/post/[id]" as={`/post/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default withLayout(Index);
