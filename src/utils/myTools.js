import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default {
  // //去除字符串头尾的指定字符
  trim(string, char) {
    return string.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
  },

  //提取HTML字符串中的文本
  removeHTMLTag(str) {
    str = str.replace(/<script[^>]*?>[\s\S]*?<\/script>/gi, ''); //去掉<script>;
    str = str.replace(/<style[^>]*?>[\s\S]*?<\/style>/gi, ''); //去掉<style>;
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
    str = str.replace(/(^\s*)|(\s*$)/g, ''); //去掉空格
    str = str.replace(/&nbsp;/gi, ''); //去掉&nbsp;
    return str;
  },

  //MarkDown转HTML
  MdtoHtml(content) {
    const md = new Remarkable({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) { }
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) { }

        return ''; // use external default escaping
      },
    });
    // const md = new Remarkable();
    return md.render(content);
  },

  //提取MarkDown的摘要
  getMdAbstract(content, title) {
    // const length = 150;
    let str = this.MdtoHtml(content);
    str = this.removeHTMLTag(str);
    str = this.trim(str, title);
    return str;
    // if (str.length <= length) {
    //   return str;
    // }
    // return str.substr(0, length) + '...';
  },
};
