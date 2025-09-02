import { describe, it, expect } from 'vitest'; const sum=(a:number,b:number)=>a+b; describe('sum',()=>{it('adds numbers',()=>{expect(sum(2,2)).toBe(4)})})
