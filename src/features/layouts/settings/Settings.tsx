import {Form} from "@features/form";
import {UISettings} from "@ui/layouts/settings";
// import {UICommitCard} from "@ui/commit-card";

const Settings = () => {
  return (
    <UISettings>
      <Form />
    </UISettings>
    /* <UICommitCard
        {...{
          id: "#1368",
          message: "add documentation for postgres scaler",
          time: "1 ч 20 мин",
          date: "21 янв, 12:06",
          branch: "master",
          hash: "9c9f0b9",
          user: "Philipp Kirkorov",
          theme: "secondary"
        }}
      /> */
  );
};

export default Settings;
