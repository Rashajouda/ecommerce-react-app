import React from "react";
import "./decriptionbox.css";
function DescriptionBox(props) {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
        <div className="description-box-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores
            fugit aspernatur omnis adipisci magnam laboriosam dolore. Sed,
            aliquid, unde in vel ea obcaecati aliquam libero deserunt
            cupiditate, non recusandae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam deleniti soluta facere quas nemo distinctio
            eum recusandae commodi aliquam incidunt assumenda vel sapiente ipsa,
            odio facilis, ad maiores voluptas nesciunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            eaque, doloremque eius soluta esse nulla debitis quas mollitia dicta
            aspernatur. Exercitationem ut quae distinctio debitis, mollitia
            aliquam fuga ex facilis?
          </p>
        </div>
    </div>
  );
}

export default DescriptionBox;
