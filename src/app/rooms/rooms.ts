export interface Room {
    availableRooms: number;
    boockedRooms: number;
    totalRooms: number;

}
//**    availableRooms? : number;*/
//**        boockedRooms? : number;*/
//        totalRooms? : number;     */

export interface RoomList {
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}
