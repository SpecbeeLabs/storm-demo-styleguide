import "./Pager.css";

function Pager() {
  return (
    <section className="section section__pager">
      <h2 className="section__title">Pagination</h2>
      <div className="section__content">
        <nav
          class="pager"
          role="navigation"
          aria-labelledby="pagination-heading"
        >
          <h4 id="pagination-heading" class="visually-hidden">
            Pagination
          </h4>
          <ul class="pager__items js-pager__items">
            <li class="pager__item pager__item--previous">
              <a href="?page=0" title="Go to previous page" rel="prev">
                <span class="visually-hidden">Previous page</span>
                <span aria-hidden="true">&#8592;</span>
              </a>
            </li>
            <li class="pager__item is-active">
              <a href="?page=0" title="Current page">
                <span class="visually-hidden">Current page</span>1
              </a>
            </li>
            <li class="pager__item">
              <a href="?page=1" title="Go to page 2">
                <span class="visually-hidden">Page</span>2
              </a>
            </li>
            <li class="pager__item">
              <a href="?page=1" title="Go to page 3">
                <span class="visually-hidden">Page</span>3
              </a>
            </li>
            <li class="pager__item">
              <a href="?page=1" title="Go to page 4">
                <span class="visually-hidden">Page</span>4
              </a>
            </li>
            <li class="pager__item">
              <a href="?page=1" title="Go to page 5">
                <span class="visually-hidden">Page</span>5
              </a>
            </li>
            <li class="pager__item pager__item--next">
              <a href="?page=1" title="Go to next page" rel="next">
                <span class="visually-hidden">Next page</span>
                <span aria-hidden="true">&#8594;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Pager;
