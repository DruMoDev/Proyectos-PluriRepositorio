import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <>
      <div>
        <Button secondary outline rounded className='mb-5'>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Semao
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Semao
        </Button>
      </div>
      <div>
        <Button rounded danger>
          Semao
        </Button>
      </div>
      <div>
        <Button outline secondary>
          Semao
        </Button>
      </div>
      <div>
        <Button warning>Click Me</Button>
      </div>
      <div>
        <Button danger outline>
          Click Me
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
