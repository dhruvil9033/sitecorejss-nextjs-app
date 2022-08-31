import {
  Text,
  RichText,
  Field,
  withDatasourceCheck,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
    Image: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={fields.heading} />

    <RichText className="contentDescription" field={fields.content} />
    <Image field={fields.Image.value} alt="About" width={'auto'} height={100} />
  </div>
);

export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
