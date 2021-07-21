/*
The CPU has 43 32-bit unsigned integer registers, which are named R00..R42. At the start of the program, all the registers contain 0. 
The CPU supports the following instructions:

MOV Rxx,Ryy - copies the value from register Rxx to register Ryy;
MOV d,Rxx - copies the numeric constant d (specified as a decimal) to register Rxx;
ADD Rxx,Ryy - calculates (Rxx + Ryy) MOD 232 and stores the result in Rxx;
DEC Rxx - decrements Rxx by one. Decrementing 0 causes an overflow and results in 232-1;
INC Rxx - increments Rxx by one. Incrementing 232-1 causes an overflow and results in 0;
INV Rxx - performs a bitwise inversion of register Rxx;
JMP d - unconditionally jumps to instruction number d (1-based). d is guaranteed to be a valid instruction number;
JZ d - jumps to instruction d (1-based) only if R00 contains 0;
NOP - does nothing.
After the last instruction has been executed, the contents of R42 are considered to be the result of the subroutine.

Write a software emulator for this CPU that executes the subroutines and returns the resulting value from R42.

All the commands in the subroutine are guaranteed to be syntactically correct and have valid register numbers, numeric constants, and jump addresses. 
The maximum program length is 1024 instructions. The maximum total number of instructions that will be executed until the value is returned is 5 · 104. 
(Keep in mind that the same instruction will be counted as many times as it will be executed.)
*/

function cpuEmulator(subroutine) {

    const MAX_INT = 2**32
    const reg = new Array(43).fill(0)

    const parseCmd = (str) => {
        let [cmd, params] = str.split(" ")
        cmd   = cmd.toLowerCase() 
        params = params === undefined ? [] : params.split(',').map(s => s.startsWith("R") ? s : parseInt(s))

        return [cmd, params]
    }

    const r        = (rg) => parseInt(rg.slice(1))
    const add      = (a, b) => (a+b) % MAX_INT
    const inc      = x => x + 1 === MAX_INT ? 0 : x + 1
    const dec      =  x => x === 0 ? MAX_INT - 1 : x - 1

    subroutine = subroutine.map(parseCmd)

    const cmds = {}
    cmds.jump = false 
    cmds.step = 0

    cmds.nop = _ => ''
    cmds.mov = (x,y) => reg[r(y)] = Number.isInteger(x) ? x : reg[r(x)]
    cmds.add = (x,y) => reg[r(x)] = add(reg[r(x)], reg[r(y)])
    cmds.dec = (x)   => reg[r(x)] = dec(reg[r(x)])
    cmds.inc = (x)   => reg[r(x)] = inc(reg[r(x)])
    cmds.inv = (x)   => reg[r(x)] = MAX_INT - reg[r(x)] - 1
    cmds.jmp = function(d) {cmds.jump = true; cmds.step = d-1}
    cmds.jz  = function (d) {
        reg[0] === 0 ? cmds.jmp(d) : cmds.nop()
    }


    while(cmds.step < subroutine.length) {
        [cmd, params] = subroutine[cmds.step]
        cmds[cmd].apply(this, params)
        if(cmds.jump) {
           cmds.jump = false 
        } else {
            cmds.step++
        }
    }

    return reg[42].toString()
}

let subroutine = [
    "MOV 5,R00",
    "MOV 10,R01",
    "JZ 7",
    "ADD R02,R01",
    "DEC R00",
    "JMP 3",
    "MOV R02,R42"
  ]

  subroutine = [
  "MOV 32,R00", 
  "MOV 1,R41", 
  "JZ 8", 
  "MOV R41,R42", 
  "ADD R41,R42", 
  "DEC R00", 
  "JMP 3", 
  "NOP"]

  subroutine = [
      "INV R41", 
    "ADD R42,R41"]

console.log(cpuEmulator(subroutine))
