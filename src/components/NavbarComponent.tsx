import { Text, Field, withDatasourceCheck, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type NavbarComponentProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    NavbarLinks: NavbarComponentProps[];
    ButtonLink: LinkField;
    Link: LinkField;
  };
};

const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="#" className="navbar-brand">MENU</a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              {props.fields.NavbarLinks.map((navlink, i) => (
                <>
                {navlink.fields.Link?.value.text != undefined?
                  <a key={i} href={`${navlink.fields.Link?.value.href}`} className="nav-item nav-link">{`${navlink.fields.Link?.value.text}`}</a>
                :
                    <div key={i} className="nav-item dropdown">
                      <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">{`${navlink.fields.Title.value}`}</a>
                      <div className="dropdown-menu">
                        {navlink.fields.NavbarLinks.map((pagelink, j)=>(
                          <a key={j} href={pagelink.fields.Link.value.href} className="dropdown-item">{`${pagelink.fields.Link.value.text}`}</a>
                        ))}
                      </div>
                    </div>
                }
                </>
              ))}
            </div>
            <div className="ml-auto">
              <a
                className="btn"
                href={props.fields.ButtonLink?.value.href}
              >{`${props.fields.ButtonLink?.value.text}`}</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default withDatasourceCheck()<NavbarComponentProps>(NavbarComponent);
