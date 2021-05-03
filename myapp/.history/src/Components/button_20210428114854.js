import React from 'react'
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
const button = ({name}) => {
    return (
        <div>
            <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            >
            {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
        </div>
    )
}

button.defultProps = {
    name: "button"
}

export default button
