const YEAR = new Date().getFullYear();

const noteFlag = true;

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Your Name.
        <a href="/feed.xml">
          RSS<span>in preparation</span>
        </a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
        span {
          color: ${noteFlag ? "#f00" : "#0f0"};
          margin-left: 10px;
        }
      `}</style>
    </footer>
  ),
};
