import React from "react";
import { Card, Image } from "semantic-ui-react";
import ReactPullToRefresh from "react-pull-to-refresh";
import Config from "../../config.json";

const Home = ({ data, handleRefresh }) => {
  const imgUrl = Config.apiUrl + "/files/" + data.dirname + "/" + data.filename;

  return (
    <ReactPullToRefresh onRefresh={handleRefresh}>
      <div className="home container">
        <Card>
          <Image className="homeImg" src={imgUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Description>
              <i className="heart icon" />
              <div className="num">1,200</div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </ReactPullToRefresh>
  );
};

export default Home;
