import { Calculaor } from './testservice';
describe('testservice', () => {

    it('should add 2 numbers', ()=> {
        const service = new Calculaor();
        expect(service.add(2,2)).toBe(4);
    } )
    it('should subtract 2 numbers', ()=> {
        const service = new Calculaor();
        expect(service.add(2,2)).toBe(0);
    } )
    it('should multiply 2 numbers', ()=> {
        const service = new Calculaor();
        expect(service.add(2,2)).toBe(1);
    } )

});
