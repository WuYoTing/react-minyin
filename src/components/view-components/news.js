import React from "react";
import {FacebookProvider, Page} from 'react-facebook';
import "./view_components.scss";

const news = () => {
    return (
        <div className='mt-3 text-center'>
            <FacebookProvider appId="289722292454716">
                <Page href="https://www.facebook.com/%E6%98%8E%E9%9F%B3%E5%A5%A7%E7%A6%8F%E6%96%87%E7%90%86%E8%A3%9C%E7%BF%92%E7%8F%AD-%E5%9C%8B%E5%B0%8F-%E5%9C%8B%E4%B8%AD-%E9%AB%98%E4%B8%AD-878709845569596/"
                      tabs="timeline" width="500"/>
            </FacebookProvider>
        </div>
    )
}
export default news;