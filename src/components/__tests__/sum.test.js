import { Sum } from "../sum";

test("it should caculate the sum of two nums", () =>{
    const result = Sum(3,8);

    expect(result).toBe(11);

})