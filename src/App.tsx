import "./App.css";
import { AvererSdkProvider, AvererWebSdk } from "@averer/averer-websdk";

function App() {
  const sdkQuery = [
    {
      id: 5,
      circuitId: "credentialAtomicQueryMTPV2",
      subjectTitle: "18 + Years Old",
      query: {
        allowedIssuers: ["*"],
        type: "EssentialIdCredential",
        context:
          "https://raw.githubusercontent.com/redbellynetwork/receptor-schema/refs/heads/main/schemas/json-ld/EssentialIdCredential.jsonld",
        skipClaimRevocationCheck: true,
        credentialSubject: {
          birthDate: {
            $lt: 20070101,
          },
        },
      },
    },
  ];

  const handleSuccess = (data: unknown) => {
    console.log("Verification successful", data);
  };

  const handleError = (reason: string) => {
    console.error("Verification failed:", reason);
  };

  return (
    <>
      <div>
        <h1>Averer Web SDK Demo</h1>
        <p>
          This is a simple demo application showcasing the usage of the Averer
          Web SDK.
        </p>
      </div>
      <div>
        <AvererSdkProvider environment="testnet">
          <AvererWebSdk
            appName="MyAvererApp"
            sdkQuery={sdkQuery}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </AvererSdkProvider>
      </div>
    </>
  );
}

export default App;
