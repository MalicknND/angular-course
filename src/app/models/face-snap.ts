// Premiere methode

/*
export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.snaps = snaps;
    }
  }

*/

// 2eme methode
export class FaceSnap {
  location?: string;
  id: string;
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public createdAt: Date,
    public snaps: number
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
