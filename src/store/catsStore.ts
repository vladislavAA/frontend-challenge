import { makeAutoObservable, runInAction, toJS } from "mobx";

export interface catData {
  id: string;
  url: string;
}

class CatsData {
  data: catData[] = [];
  idMap = new Map();
  url = `https://api.thecatapi.com/v1/images/search?limit=30`;
  api_key =
    "live_WypnmiGwfCidkByhPZ0EztF1E6rW4OZF2xUY60qYRAGX4wuYBMQiRom06dhUeviN";
  loading = false;
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async loadData() {
    try {
      if (!this.loading) {
        this.loading = true;

        const response = await fetch(`${this.url}&page=${this.currentPage}`, {
          headers: {
            "x-api-key": this.api_key,
          },
        });

        const imageData = await response.json();

        runInAction(() => {
          this.data = [...this.data, ...imageData];
          console.log(toJS(this.data));
          this.currentPage += 1;
          this.loading = false;
        });
      }
    } catch (error) {
      console.error("Error loading data: ", error);
      this.loading = false;
    }
  }

  getData() {
    return this.data;
  }

  getIdMap(id: string): boolean {
    console.log("fun - ", this.idMap.has(id));
    return this.idMap.has(id);
  }

  checkFavorites(id: string, url: string) {
    if (this.idMap.has(id)) {
      this.idMap.delete(id);
    } else {
      this.idMap.set(id, url);
    }
  }
}

export default new CatsData();
