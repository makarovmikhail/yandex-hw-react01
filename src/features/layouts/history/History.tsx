import {UICommitCard} from "@ui/commit-card";
import {UIHistory} from "@ui/layouts/history";
import {format} from "date-fns";
import {ru} from "date-fns/locale";

import history from "@history";
import {
  ActionButton,
  ActionButtonContent,
  ActionButtonText
} from "@ui/header/Styles";

const History = () => {
  const timestamp = Date.now();
  return (
    <UIHistory>
      {history.map((h) => (
        <UICommitCard
          {...h}
          date={format(timestamp, "dd MMM, hh:mm", {
            locale: ru
          }).toLocaleLowerCase()}
          time={format(timestamp - 60 * 60 * 60, "hh ч mm мин")}
          theme={"secondary"}
          key={h.id}
        />
      ))}
      {
        <div style={{width: "auto"}}>
          <ActionButton>
            <ActionButtonContent>
              <ActionButtonText>{"Show more"}</ActionButtonText>
            </ActionButtonContent>
          </ActionButton>
        </div>
      }
    </UIHistory>
  );
};

export default History;
