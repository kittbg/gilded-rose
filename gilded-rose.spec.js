import { expect, describe, it} from "vitest";
import { Item, items, updateQuality, AgedBrie, ConcertTickets, Ragnaros, Conjured } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 3, 5);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(2);
    expect(testItem.quality).toBe(4);
  });

  
    it("sellin date is less than zero and items reduce quality by 2", () => {
      const testItem = new Item("basic", -1, 5);
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(-2);
      expect(testItem.quality).toBe(3);
    });

    it("quality of an item is never a negative", () => {
      const testItem = new Item("basic", 3, 0);
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(2);
      expect(testItem.quality).toBe(0);
    });

    it("Brie increases in quality as sellIn decreases", () => {
      const testItem = new AgedBrie("AgeBried", 5, 3);
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(4);
      expect(testItem.quality).toBe(4);
    });

    it("the quality of an item is never more than 50", () => {
      const testItem = new Item("basic", 2, 51);
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(1);
      expect(testItem.quality).toBe(50);
    });

    it("Legendary item never has to be sold nor does it decrease in quality", () => {
      const testItem = new Ragnaros("Ragnaros", 0, 80);
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(0);
      expect(testItem.quality).toBe(80);
    });

    it("backstage passes increase in quality 10 days out", () => {
      const testItem = new ConcertTickets("ConcertTickets", 9, 10) 
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(8);
      expect(testItem.quality).toBe(12);
    });

    it("backstage passes increase in quality 5 days out", () => {
      const testItem = new ConcertTickets("ConcertTickets", 3, 10) 
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(2);
      expect(testItem.quality).toBe(13);
    });

    it("backstage passes increase in quality as it's sellIn value decreases", () => {
      const testItem = new ConcertTickets("ConcertTickets", 0, 10) 
      items.push(testItem);
  
      updateQuality();
  
      expect(testItem.sellIn).toBe(-1);
      expect(testItem.quality).toBe(0);
    });

    // it("Conjured items degrade in quality twice as fast as normal items", () => {
    //   const testItem = new Item("Conjured", 10, 10) 
    //   items.push(testItem);
  
    //   updateQuality();
  
    //   expect(testItem.sellIn).toBe(9);
    //   expect(testItem.quality).toBe(8);
    // });
  });


