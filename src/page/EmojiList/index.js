import React, { useState, useEffect, memo } from "react";
import { List, Card, Button, Input } from "antd";
import categories from "./Categories.json";
import emojiList from "./EmojiList.json";

const { Search } = Input;

const CategoryList = () => {
  let dataSet = [];

  for (let category in categories) {
    dataSet[category] = [];
    let categoryData = categories[category];
    let founded = [];
    for (let i = 0; i < categoryData.length; i++) {
      let found = emojiList.find(
        ({ title }) => title.toLowerCase().replace(" ", "_") === categoryData[i]
      );
      if (found !== undefined) {
        founded.push(found);
      }
    }

    dataSet[category] = founded;
  }

  return dataSet;
};
const EmojiList = ({ data }) => {
  console.log(data);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 8
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.symbol}>{item.title}</Card>
        </List.Item>
      )}
    />
  );
};

const EmojiView = () => {
  const [emojis, setEmojis] = useState(CategoryList());

  const handleChange = e => {
    console.log(e);

    // const searchData = CategoryList();

    // let dataSet = [];

    // for (let category in searchData) {
    //   dataSet[category] = [];
    //   let categoryData = categories[category];
    //   let founded = [];
    //   for (let i = 0; i < categoryData.length; i++) {
    //     let found = emojiList.find(
    //       ({ title }) =>
    //         title.toLowerCase().replace(" ", "_") === categoryData[i]
    //     );
    //     if (found !== undefined) {
    //       founded.push(found);
    //     }
    //   }

    //   dataSet[category] = founded;
    // }

    // return dataSet;
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => handleChange(value)}
      />
      {Object.keys(emojis).map((category, k) => {
        return (
          <Card title={category} key={category}>
            <EmojiList data={emojis[category]} />
          </Card>
        );
      })}
    </div>
  );
};

export default EmojiView;
