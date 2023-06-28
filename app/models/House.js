export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.floors = data.levels
        this.price = data.price
        this.year = data.year
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }

    get housesTemplate() {
        return `
        <div class="col-2 glass m-4">
            <div class="card">
            <img src="${this.imgUrl}" class="card-img-top" alt="House">
            <div class="card-body">
                <h5 class="card-title">$${this.price}</h5>
                <p class="card-text">Beds: ${this.bedrooms}</p>
                <p class="card-text">Baths: ${this.bathrooms}</p>
                <p class="card-text">Floors: ${this.floors}</p>
                <p class="card-text">Year Built: ${this.year}</p>
                <p class="card-text">Description: ${this.description}</p>
                <p class="card-text">Listed Date: ${this.createdAt}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated ${this.updatedAt}</small>
            </div>
            </div>
            </div>
        </div>
        `
    }
}