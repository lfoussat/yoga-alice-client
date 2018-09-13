import React from 'react'
import './BackToTopBtn.css'
import { api } from '../api.js'

const BackToTopBtn = () =>
  <section>
    <div className="backToTop">
      <a onClick={() => window.scrollTo(0, 0)}><img src={`${api}/images/arrow-t.png`} alt="Back to top" id="arrowTop"/><p>Back to top</p></a>
    </div>
  </section>

  export default BackToTopBtn
