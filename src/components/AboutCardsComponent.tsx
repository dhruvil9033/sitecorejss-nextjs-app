import {
  Text,
  Field,
  withDatasourceCheck,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type AboutCardsComponentProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
    Cards: CardProps[];
  };
};

type CardProps = {
  fields: {
    Title: Field<string>;
    Image: ImageField;
    Count: Field<string>;
    Heading: Field<string>;
    Cards: CardProps[];
  };
};

const AboutCardsComponent = (props: AboutCardsComponentProps): JSX.Element => {
  console.log(props.fields.Cards.at(3));
  return (
    <div>
      <p>AboutCardsComponent Component</p>
      <Text field={props.fields.Heading} />
      {console.log(props.fields.Cards)}
      {props.fields.Cards.map((CardItem, i) => (
        <div key={i}>
          {i != 3 ? 
            <>
              <Text field={CardItem.fields.Title} />
              <Text field={CardItem.fields.Count} />
              <Image field={CardItem.fields.Image} alt="About" width={'auto'} height={50} />
            </>
          : <>
              <Text field={CardItem.fields.Heading} />
                {CardItem.fields.Cards.map((SubItem, i) => (
                <div key={i}>
                  {console.log(SubItem)}
                  <Text field={SubItem.fields.Title} />
                  <Text field={SubItem.fields.Count} />
                  <Image field={SubItem.fields.Image} alt="About" width={'auto'} height={50} />
                </div>
              ))}
            </>
          }

          {/* {CardItem.fields.Cards.map((SubItem, i) => (
            <div key={i}>
              {console.log(SubItem)}
              <Text field={SubItem.fields.Title} />
              <Text field={SubItem.fields.Count} />
              <Image field={SubItem.fields.Image} alt="About" width={'auto'} height={50} />
            </div>
          ))} */}
        </div>
      ))}
    </div>
)};

export default withDatasourceCheck()<AboutCardsComponentProps>(AboutCardsComponent);
