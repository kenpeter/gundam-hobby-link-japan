import React from "react";
import { Card, Image } from "semantic-ui-react";
import ReactPullToRefresh from "react-pull-to-refresh";
import Config from "../../config.json";

const Home = ({ data, handleRefresh, likeit }) => {
  const imgUrl = Config.apiUrl + "/files/" + data.dirname + "/" + data.filename;

  return (
    <ReactPullToRefresh onRefresh={handleRefresh}>
      <div className="home container">
        <Card>
          <Image className="homeImg" src={imgUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Description>
              <i className="heart icon" onClick={() => likeit(data._id)} />
              <div className="num">{data.likeit}</div>
              <div>Pull to refresh</div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </ReactPullToRefresh>
  );
};

export default Home;
