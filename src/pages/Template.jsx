import React, { Fragment, useState, useEffect } from 'react';
// import MarkdownView from 'react-showdown';
import Blocks from 'editorjs-blocks-react-renderer';
import Navbar from '../components/Navbar';
import axios from '../utils/axios';
import jsonToHtml from '../utils/jsonToHtml';
import './styles/Template.module.css';

const Template = ({ match }) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/pages/${match.url}`).then((res) => {
      // console.log(JSON.parse(res.data.data.content))
      if (!res.data.data) {
        return;
      }
      setPage(res.data.data.content);
      setLoading(false);
    });
  }, [match]);
  if (!page) {
    return <NotFound />;
  }
  return (
    <Fragment>
      <Navbar title='virtual conference home' />

      <div
        className='w-full flex-1 py-3 bg-black'
        style={{ minHeight: 'calc(95vh - 64px)', color: 'white' }}
      >
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className='prose-red md:prose-lg lg:prose-lg'>
            <Blocks
              data={JSON.parse(page)}
              config={{
                code: {
                  className: 'language-js',
                },
                delimiter: {
                  className: 'border border-2 w-16 mx-auto',
                },
                embed: {
                  className: 'border-0',
                },
                header: {
                  className: 'font-bold text-center text-home-yellow text-6xl',
                },
                image: {
                  className: 'w-full max-w-screen-md',
                  actionsClassNames: {
                    stretched: 'w-full h-80 object-cover',
                    withBorder: 'border border-2',
                    withBackground: 'p-2',
                  },
                },
                list: {
                  className: 'list-inside',
                },
                paragraph: {
                  className: 'text-base text-opacity-75',
                  actionsClassNames: {
                    alignment: 'text-{alignment}', // This is a substitution placeholder: left or center.
                  },
                },
                quote: {
                  className: 'py-3 px-5 italic font-serif',
                },
                table: {
                  className: 'table-auto',
                },
              }}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Template;

const outputHtml = (articleObj) => {
  let articleHTML = '';

  // eslint-disable-next-line array-callback-return
  articleObj.map((obj) => {
    switch (obj.type) {
      case 'paragraph':
        articleHTML += jsonToHtml.makeParagraph(obj);
        break;
      case 'image':
        articleHTML += jsonToHtml.makeImage(obj);
        break;
      case 'header':
        articleHTML += jsonToHtml.makeHeader(obj);
        break;
      case 'raw':
        articleHTML += `<div class="ce-block">
					<div class="ce-block__content">
					<div class="ce-code">
						<code>${obj.data.html}</code>
					</div>
					</div>
				</div>\n`;
        break;
      case 'code':
        articleHTML += jsonToHtml.makeCode(obj);
        break;
      case 'list':
        articleHTML += jsonToHtml.makeList(obj);
        break;
      case 'quote':
        articleHTML += jsonToHtml.makeQuote(obj);
        break;
      case 'warning':
        articleHTML += jsonToHtml.makeWarning(obj);
        break;
      case 'checklist':
        articleHTML += jsonToHtml.makeChecklist(obj);
        break;
      case 'embed':
        articleHTML += jsonToHtml.makeEmbed(obj);
        break;
      case 'delimeter':
        articleHTML += jsonToHtml.makeDelimeter(obj);
        break;
      default:
        return '';
    }
  });
};

const NotFound = () => {
  return (
    <Fragment>
      <Navbar title='virtual conference home' />

      <div
        className='w-full flex-1 py-3 bg-black'
        style={{ minHeight: 'calc(95vh - 64px)', color: 'white' }}
      >
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </Fragment>
  );
};
