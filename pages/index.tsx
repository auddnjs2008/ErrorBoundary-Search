import AsyncBoundary from './components/AsyncBoundary';
import ErrorComponent from './components/ErrorComponent';
import TextComponent from './components/TextComponent';
import GridContainer from './container/GridContainer';

export default function Home() {
  return (
    <div>
      {/* <AsyncBoundary
        rejectedFallback={({ error, reset }) => (
          <div>
            {error.message} <button onClick={() => reset()}>재시도</button>
          </div>
        )}
        pendingFallback={<div>Loading................</div>}
      >
        <TextComponent />
      </AsyncBoundary>

      <AsyncBoundary
        rejectedFallback={({ error }) => <div>Error 2이다 </div>}
        pendingFallback={<div>Loading2222222...........</div>}
      >
        <TextComponent />
      </AsyncBoundary> */}
      <GridContainer />
    </div>
  );
}
