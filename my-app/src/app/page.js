// import Index from '../component/Component'
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("../component/Component")
);

export default function Home() {

  return (
    <main className="min-h-screen p-10">
      <div>
        <h2>하이</h2>
        {/* <Index /> */}
        <DynamicComponent />
      </div>
    </main>
  )
}
