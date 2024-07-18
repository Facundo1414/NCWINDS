package com.viajes.Travel.platform.controllers;

import com.viajes.Travel.platform.Dto.JwtResponseDto;
import com.viajes.Travel.platform.Dto.LoginDto;
import com.viajes.Travel.platform.Dto.UsuariosRequestDto;
import com.viajes.Travel.platform.Dto.UsuariosResponseDto;
import com.viajes.Travel.platform.entity.Usuario;
import com.viajes.Travel.platform.entity.Viajes;
import com.viajes.Travel.platform.jwt.JwtService;
import com.viajes.Travel.platform.services.EstadosService;
import com.viajes.Travel.platform.services.PerfilService;
import com.viajes.Travel.platform.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioServ;
    @Autowired
    private BCryptPasswordEncoder passwordEncode;
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private PerfilService perfilService;
    
    @Autowired
    private EstadosService estadosService;


    @PostMapping("/auth/login")
    public ResponseEntity<?>login(@RequestBody LoginDto dto){

        Usuario usuario= this.usuarioServ.buscarPorCorreoActivo(dto.getCorreo());
        if (usuario==null){

            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                {
                    put("mensaje", "Las credenciales ingresadas no son válidas");
                }
            });
        }else{
            if (this.passwordEncode.matches(dto.getPassword(), usuario.getPassword())){
                String token=this.jwtService.generarToken(usuario.getCorreo());

                return ResponseEntity.status(HttpStatus.OK).body(
                        new JwtResponseDto(
                                usuario.getId(), usuario.getNombre(), usuario.getPerfilId().getNombre(), usuario.getPerfilId().getId(),  token
                        )
                );
            }else{
                return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                    {
                        put("mensaje", "Las credenciales ingresadas no son válidas");
                    }
                });
            }
        }
    }

    @GetMapping("/auth/refresh/{id}")

    public ResponseEntity<?>refresh (@PathVariable ("id") Integer id){

        Usuario usuario=this.usuarioServ.buscarPorId(id);

        if (usuario==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                {
                    put("mensaje","Ocurrio un error inesparado");
                }
            });
        }else {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new JwtResponseDto( usuario.getId(), usuario.getNombre(), usuario.getPerfilId().getNombre(), usuario.getPerfilId().getId(), this.jwtService.generarToken(usuario.getCorreo())));
        }

    }


    @GetMapping("/auth/usuarios")
    
    public ResponseEntity<?>listarUsuarios(){
    	
    	
    	
    	List<UsuariosResponseDto>lista= new ArrayList<>();
    	List<Usuario>datos = this.usuarioServ.listar();
    	
    	datos.forEach((dato)->{
    		lista.add(new UsuariosResponseDto(
    				dato.getId(),
    				dato.getNombre(),dato.getCorreo(),
    				dato.getPerfilId().getNombre(),
    				dato.getPerfilId().getId(), dato.getEstadosId().getId(),
    				dato.getEstadosId().getNombre()));
    	});
    	
    	return ResponseEntity.status(HttpStatus.OK).body(lista);
    }
    
    
    @PostMapping("/auth/usuarios")
    
    public ResponseEntity<?>crearUsuario(@RequestBody UsuariosRequestDto dto){
    	
    	Usuario usu=this.usuarioServ.buscarPorCorreo(dto.getCorreo());
    	
    	
    	if(usu==null) {
    		
    		this.usuarioServ.guardar(new Usuario(dto.getCorreo()
    				,dto.getNombre()
    				,this.passwordEncode.encode(dto.getPassword())
    				,"",new Date(),this.perfilService.buscarPorId(2L)
    				,this.estadosService.buscarPorId(1L)));
    		
    		return ResponseEntity.status(HttpStatus.CREATED).body(new HashMap<String,String>() {
    			{
    				put("creado","se creo el usuario correctamente");
    			}
    		});
    		
    	}else {
    		
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<String,String>() {
    			{
    				put("error","ocurrio un error inesperado");
    			}
    		});
    	}
    	
    }
}

