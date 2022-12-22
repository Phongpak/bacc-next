import React from 'react';

const PopularTagsSidebar = () => {
    return (
        <div className="sidebar-widget-single mb-30 wow fadeInUp">
            <h4 className="sidebar-widget-title">Popular Tags</h4>
            <div className="tags-list">
                <a href="#" className="tag">#profile</a>
                <a href="#" className="tag">#account</a>
                <a href="#" className="tag">#security</a>
                <a href="#" className="tag">#bankaccount</a>
                {/* <a href="#" className="tag">#nftcoincollections</a>
                <a href="#" className="tag">#cybernet</a>
                <a href="#" className="tag">#bitcoins</a>
                <a href="#" className="tag">#currency</a>
                <a href="#" className="tag">#wallet</a>
                <a href="#" className="tag">#Transcation</a>
                <a href="#" className="tag">#bitcoins</a> */}
            </div>
        </div>
    );
};

export default PopularTagsSidebar;