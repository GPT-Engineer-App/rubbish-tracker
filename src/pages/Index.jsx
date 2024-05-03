import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Error",
        description: "Item description cannot be empty.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading>Scavenger Tracker</Heading>
        <Input
          placeholder="Enter item description"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddItem();
            }
          }}
        />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddItem}>
          Add Item
        </Button>
        <List width="100%">
          {items.map((item, index) => (
            <ListItem key={index} paddingY={2} display="flex" justifyContent="space-between" alignItems="center">
              {item}
              <IconButton aria-label="Delete item" icon={<FaTrash />} onClick={() => handleDeleteItem(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
