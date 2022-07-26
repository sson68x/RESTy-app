import './results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {

  return (
    <section>
      <JSONPretty
        id='json-pretty'
        data-testid="test-results"
        data={JSON.stringify(props.data)}>
      </JSONPretty>
    </section>
  );
};

export default Results;
