import Array "mo:base/Array";
import Nat "mo:base/Nat";


actor {

  var counter_value = 0;

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func add(x : Nat, y : Nat) : async Nat{
    return x + y;
  };

  public func square(x : Nat) : async Nat{
    return x * x;
  };

  public func days_to_second(n : Nat) : async Nat{
    return n * 60 * 60  * 24;
  };

  public func increment_counter(n: Nat) : async Nat{
    counter_value := counter_value + n;
    return counter_value;
  };

  public func clear_counter(): async Nat{
    counter_value := 0;
    return counter_value;
  };

  public func divide(x : Nat, y : Nat) : async Bool{
    return (x % y) == 0;
  };

  public func is_even(n : Nat) : async Bool{
    return (n % 2) == 0;
  };

  public func sum_of_array(array : [Nat]) : async Nat{
    if (array.size() == 0){
      return 0
    } else{
      var result = 0;
      for (value in array.vals()){
        result := result + value;
      };
      return result;
    };
  };

  public func maximum(array : [Nat]) : async Nat{
    var max = 0;
    for (value in array.vals()){
      if (value > max){
        max := value;
      };
    };
    return max;
  };

  public func remove_from_array(array : [Nat], n : Nat) : async [Nat]{
    return Array.filter(array, func (x: Nat) : Bool {
      return x != n
    });
  };

  public func selection_sort(array : [Nat]) : async [Nat]{
    return Array.sort(array, Nat.compare);
  };
};
